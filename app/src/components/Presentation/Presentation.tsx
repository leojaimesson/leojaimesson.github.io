import image from "../../assets/avatar.png";
import "./Presentation.css";

export const Presentation = () => {
  return (
    <div className="presentation">
      <img src={image} alt="leo" className="presentation-image" />
      <h2>Leo Jaimesson</h2>
      <p className="presentation-text">
        Frontend Engineer with 7+ years of experience, bringing a Software
        Engineering mindset to building scalable, reliable, and high-performance
        applications. I thrive on crafting modern, accessible, and user-focused
        interfaces while also diving into software architecture, system design,
        and engineering best practices to ensure long-term maintainability and
        impact.
      </p>
    </div>
  );
};
