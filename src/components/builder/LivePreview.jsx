import PortfolioRenderer from "../portfolio/PortfolioRenderer";

const widths = {
  desktop: "100%",
  tablet: "820px",
  mobile: "390px",
};

export default function LivePreview({ portfolio, onToggleMode }) {
  return (
    <div className="builder-preview-stage">
      <div
        className="builder-device-frame"
        style={{ width: widths[portfolio.device] || widths.desktop }}
      >
        <PortfolioRenderer
          portfolio={portfolio}
          onToggleMode={onToggleMode}
          preview
          elementId="portfolio-preview-canvas"
        />
      </div>
    </div>
  );
}
