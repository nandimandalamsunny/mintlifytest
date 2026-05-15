(function () {
  const sectionId = "llms-inline-docs-links";

  function createSection() {
    const section = document.createElement("div");
    section.id = sectionId;
    section.className = "llms-inline-links";
    section.setAttribute("role", "complementary");
    section.setAttribute("aria-label", "AI-readable documentation");

    const text = document.createElement("p");
    text.className = "llms-inline-links__text";

    const icon = document.createElement("span");
    icon.className = "llms-inline-links__icon";
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = "✦";

    const label = document.createTextNode("AI-readable docs:");
    const llms = document.createElement("a");
    llms.href = "/llms.txt";
    llms.textContent = "llms.txt";

    const middle = document.createTextNode("or");
    const full = document.createElement("a");
    full.href = "/llms-full.txt";
    full.textContent = "llms-full.txt";

    text.append(
      icon,
      label,
      document.createTextNode(" "),
      llms,
      document.createTextNode(" "),
      middle,
      document.createTextNode(" "),
      full
    );
    section.append(text);

    return section;
  }

  function mountSection() {
    const pagination = document.querySelector("#pagination");
    const feedback = document.querySelector("feedback-toolbar");
    const target = pagination || feedback;

    if (!target) {
      return;
    }

    const existing = document.getElementById(sectionId);
    if (existing) {
      if (existing.previousElementSibling !== target) {
        target.insertAdjacentElement("afterend", existing);
      }
      return;
    }

    target.insertAdjacentElement("afterend", createSection());
  }

  function scheduleMount() {
    window.requestAnimationFrame(mountSection);
  }

  scheduleMount();

  const observer = new MutationObserver(scheduleMount);
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
  });
})();
