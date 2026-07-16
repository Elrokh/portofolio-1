import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export async function exportElementToPdf(element, filename = "portfolio.pdf") {
  if (!element) {
    throw new Error("Portfolio preview was not found.");
  }

  const computedBackground = window.getComputedStyle(element).backgroundColor;
  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
    backgroundColor: computedBackground || "#020617",
    logging: false,
    windowWidth: element.scrollWidth,
    windowHeight: element.scrollHeight,
    scrollX: 0,
    scrollY: 0,
  });

  const imageData = canvas.toDataURL("image/jpeg", 0.96);
  const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const imageWidth = pageWidth;
  const imageHeight = (canvas.height * imageWidth) / canvas.width;

  let remainingHeight = imageHeight;
  let position = 0;

  pdf.addImage(imageData, "JPEG", 0, position, imageWidth, imageHeight, undefined, "FAST");
  remainingHeight -= pageHeight;

  while (remainingHeight > 0) {
    position = remainingHeight - imageHeight;
    pdf.addPage();
    pdf.addImage(imageData, "JPEG", 0, position, imageWidth, imageHeight, undefined, "FAST");
    remainingHeight -= pageHeight;
  }

  pdf.save(filename);
}
