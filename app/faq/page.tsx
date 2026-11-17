import PageShell from "../../components/PageShell";

const groups: [string, [string, string][]][] = [
  ["Before you visit", [
    ["When should I see a fertility specialist?", "The right time depends on age, history and individual circumstances. A consultation can help you understand what may be useful next."],
    ["What happens during the first consultation?", "The doctor reviews your history, previous investigations and treatment, then explains possible next steps."],
    ["Do both partners need to attend?", "It can be useful for both partners to attend when appropriate, particularly when fertility factors may involve either person."],
  ]],
  ["Treatment questions", [
    ["Does fertility treatment hurt?", "Experiences vary. Some parts of treatment can cause temporary discomfort, and your care team should explain what to expect."],
    ["How long does an IVF cycle take?", "A cycle can take several weeks, but the timeline depends on the protocol and individual response."],
    ["How much does IVF cost?", "Cost depends on medicines, investigations, the treatment plan and any additional procedures. A real clinic should provide its current pricing structure."],
    ["What happens if the first treatment does not work?", "Your doctor can review what happened, what was learned and whether another approach is reasonable. There is no single next step for everyone."],
  ]],
  ["Practical", [
    ["Are evening consultations available?", "Yes. The fictional clinic is open Monday through Saturday until 8:30 PM."],
    ["Is my information private?", "A real clinic should explain how patient information is collected, stored and used. This demo does not collect or store medical information."],
  ]],
];

export default function FAQPage() {
  return (
    <PageShell eyebrow="04 / FAQ" title="The questions people usually carry into the room." body="Short answers for the things that are often difficult to ask out loud.">
      <section className="section">
        <div className="container faq-page">
          {groups.map(([group, items]) => (
            <section className="faq-group" key={group}>
              <div className="section-kicker">{group}</div>
              {items.map(([question, answer]) => (
                <details key={question}>
                  <summary>{question}<span>+</span></summary>
                  <p>{answer}</p>
                </details>
              ))}
            </section>
          ))}
          <div className="demo-note"><strong>Important</strong><p>Information on this fictional website is for general education and demonstration only. A real clinic's medical content should be reviewed and approved by its treating clinicians.</p></div>
        </div>
      </section>
    </PageShell>
  );
}
