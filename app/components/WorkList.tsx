import { work } from "../work";

export function WorkList() {
  return (
    <section className="work" aria-label="Selected work">
      <h2 className="sr-only">Selected work</h2>
      <div className="work-header">
        <span className="work-num">No</span>
        <span className="work-title">Project</span>
        <span className="work-spacer" aria-hidden />
        <span className="work-services">Services</span>
        <span className="work-year">Year</span>
      </div>

      <ul className="work-items">
        {work.map((item, i) => (
          <li className="work-row" key={item.title}>
            <a
              className="work-link"
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="work-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="work-title">{item.title}</span>
              <span className="work-spacer" aria-hidden />
              <span className="work-services">{item.services}</span>
              <span className="work-year">{item.year}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
