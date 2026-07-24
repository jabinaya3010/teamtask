// src/data/newsData.js
// Array of objects — dynamic rendering source for the whole app
// Each item now carries a full "content" array (paragraphs) and
// "highlights" (key facts) so the detail page can show a long,
// in-depth article instead of just a one-line summary.

export const NEWS_DATA = [
  {
    id: "n1",
    iconKey: "technology",
    category: "Technology",
    accent: "#E3A008",
    title: "Next-Gen AI Models Learn to Reason Like Working Scientists",
    summary:
      "Research labs report language models that can now design and self-critique multi-step experiments, cutting the time from hypothesis to result in early trials.",
    date: "2026-07-23",
    source: "TechDaily",
    readTime: "12 min read",
    highlights: [
      "New reasoning models can draft an experiment plan, predict likely failure points, and revise the plan before a single test is run.",
      "Early pilot programs report a 30–40% reduction in time between hypothesis and first usable result.",
      "Researchers caution that human review is still required before any model-generated conclusion is published.",
      "The approach is being trialed first in materials science and drug-interaction screening, where iteration cycles are long and costly.",
    ],
    content: [
      "For decades, the bottleneck in experimental science has rarely been the availability of ideas — it has been the sheer amount of trial, error, and manual bookkeeping required to move from a hypothesis to a validated result. A new class of reasoning-focused AI models is now being tested inside research labs specifically to attack that bottleneck, and the early numbers are turning heads across the scientific community.",
      "Unlike earlier generations of AI tools that were mainly used to summarize papers or search literature, these newer systems are being given a more active role: proposing multi-step experimental protocols, flagging likely sources of error before a single sample is prepared, and revising their own plans when intermediate results don't match expectations. Lab leads describe the shift as moving from 'a very well-read assistant' to something closer to a junior collaborator who can hold an entire experimental arc in mind at once.",
      "The core technical change behind this shift is what researchers are calling 'structured self-critique.' Instead of generating a single answer and stopping, the model is prompted to lay out an experimental plan, then separately evaluate that same plan for weak assumptions, confounding variables, or steps that don't follow logically from the stated goal. Only after this internal review does it present a final protocol to the human researcher. In blind comparisons, protocols that went through this two-pass process needed noticeably fewer revisions once real lab data started coming in.",
      "One of the clearest early wins has been in materials science, where testing a single candidate compound can take days and where a poorly designed experiment might not reveal its flaws until results are already in hand. Teams working on battery electrolyte formulations report that AI-assisted protocol design helped them rule out several dead-end formulations before committing lab time to them, freeing up equipment and staff for more promising directions.",
      "Pharmaceutical researchers screening for drug interactions describe a similar pattern. Because interaction studies often involve long combinatorial chains of variables — dosage, timing, patient subgroup, delivery method — a model that can reason across many of those variables simultaneously and flag unlikely-to-succeed combinations early has real value, even if it never touches a physical sample itself.",
      "Still, nobody involved in these pilot programs is describing the technology as a replacement for scientific judgment. Every lab interviewed for this story maintains a strict human-in-the-loop policy: model-generated protocols are reviewed by a senior researcher before approval, and any conclusion drawn from resulting data goes through the same peer-review process as work that never touched an AI system. The models are explicitly barred from being cited as an author or sole validator of any finding.",
      "There are also open questions about how well this approach generalizes. The current pilots are concentrated in domains with well-structured, quantifiable outcomes — chemistry, materials, certain areas of biology — where 'success' and 'failure' are relatively easy to define. Fields with more ambiguous or qualitative outcomes, such as parts of psychology or ecology, may prove much harder for a reasoning model to usefully assist with, since the self-critique step depends on the model having a fairly precise sense of what a good versus bad experimental design looks like.",
      "Cost and access are another consideration. Running iterative reasoning passes over complex experimental designs is computationally expensive compared to a single-shot query, and several smaller labs interviewed said budget, not capability, was their main obstacle to adopting the tools. Some university consortia are now exploring shared compute pools specifically to give smaller research groups access to these workflows without each lab needing its own infrastructure.",
      "Ethicists and research-integrity specialists are watching the trend closely as well. Their concern isn't that the models will produce fraudulent results, but that the convenience of an always-available 'experiment designer' could quietly shift how research questions get chosen in the first place — nudging labs toward questions that are easy for a model to help formalize, rather than questions that matter most scientifically. Several institutions are drafting internal guidelines to make sure the tools remain a means of executing a research agenda that humans set, not a force that reshapes the agenda itself.",
      "For now, the consensus among the researchers interviewed is cautiously optimistic: the tools are saving real time on the unglamorous, error-prone parts of experimental design, without yet changing what counts as a valid scientific result. Whether that balance holds as the models get more capable — and more embedded in daily lab workflows — is likely to be one of the more closely watched questions in research methodology over the next few years.",
    ],
  },
  {
    id: "n2",
    iconKey: "space",
    category: "Space",
    accent: "#1F7A6C",
    title: "Private Lunar Lander Touches Down Near the Moon's South Pole",
    summary:
      "The uncrewed mission delivered a suite of ice-mapping instruments to a crater rim, the fourth successful commercial landing this year.",
    date: "2026-07-22",
    source: "OrbitWire",
    readTime: "11 min read",
    highlights: [
      "The lander touched down within 300 meters of its targeted crater-rim site, among the most precise commercial landings to date.",
      "Onboard instruments will spend roughly 10 Earth days mapping subsurface ice deposits before the lunar night ends the mission.",
      "This is the fourth successful commercial lunar landing this year, continuing a rapid cadence of private missions to the south polar region.",
      "Data gathered will feed directly into site-selection planning for future crewed missions and potential resource-extraction demonstrations.",
    ],
    content: [
      "A privately built lunar lander has successfully touched down on the rim of a crater near the Moon's south pole, delivering a compact suite of scientific instruments to one of the most scientifically valuable — and technically challenging — regions of the lunar surface. The landing marks the fourth successful commercial touchdown this year, part of a broader wave of private missions aimed at scouting the south pole ahead of planned crewed exploration later this decade.",
      "The south polar region has become the focal point of lunar exploration largely because of what scientists believe lies beneath its surface: pockets of water ice trapped in permanently shadowed craters that never see direct sunlight. If confirmed and accessible in sufficient quantity, that ice could be a critical resource for future missions, potentially supplying drinking water, breathable oxygen, and even rocket propellant without the enormous cost of hauling those materials from Earth.",
      "Landing precisely in this region is notoriously difficult. The terrain is heavily cratered and uneven, the low sun angle near the pole creates long, disorienting shadows, and communication with Earth can be intermittent depending on a lander's exact position relative to the horizon. Mission engineers said the spacecraft touched down within roughly 300 meters of its intended target on the crater rim — a level of precision that would have been considered extremely ambitious for a robotic lander just a few years ago.",
      "Onboard, the lander carries a set of instruments designed specifically to probe what lies just beneath the surface rather than the surface itself. A neutron spectrometer will measure hydrogen concentrations in the topmost layer of soil, a strong indicator of buried ice, while a ground-penetrating radar system will attempt to build a rough picture of subsurface layering down to a depth of a few meters. A small drill will also collect and analyze soil samples directly, giving mission scientists a ground-truth check against the remote-sensing instruments.",
      "The mission's working window is short. Because the lander is not equipped with the kind of radioisotope heating used on some more expensive government missions, it relies on solar power and is expected to survive only about ten Earth days before the onset of lunar night, when temperatures in the region can plunge low enough to disable its electronics permanently. Mission planners have built a dense, front-loaded schedule of measurements to make the most of that window.",
      "This landing continues what has been an unusually active year for commercial lunar exploration. Three other private landers have reached the Moon's surface in the past several months, each carrying a different mix of scientific and technology-demonstration payloads, from small rovers to sample-return technology tests. Industry analysts point to this cadence as evidence that lunar delivery services — companies that offer to fly a customer's payload to the Moon for a fee — have moved from a speculative business model to a genuinely operating market.",
      "Space agencies are watching closely, in part because much of the data gathered by these commercial missions will directly inform where future crewed landings are targeted. Confirming both the location and concentration of ice deposits is considered a prerequisite for any serious plan to establish a longer-duration human presence near the pole, since predictable access to water ice changes the logistics of a mission dramatically.",
      "Not every recent attempt at a south polar landing has succeeded — the region's difficulty has claimed multiple missions from different countries and companies in past years, some of which crashed or tipped over on touchdown. That track record is part of why this landing's precision is being highlighted so prominently: it suggests the guidance and hazard-avoidance systems developed for this specific mission performed close to their design targets under real, unpredictable terrain conditions rather than in simulation alone.",
      "Commercially, a successful landing also matters beyond the science payload itself. The company behind the mission holds contracts to deliver additional payloads for other customers, including instruments from two other national space agencies, on future flights to the same general region. A clean landing strengthens the case that the delivery service is reliable enough to plan future missions around, which in turn affects how willing other organizations are to commit payloads and funding to upcoming flights.",
      "Over its brief operational life, the lander is expected to transmit data back to Earth in short bursts as its solar panels and communications geometry allow. Scientists caution that fully interpreting the ice-mapping results will take weeks to months after the mission ends, once the data has been cross-checked against orbital surveys and modeled against known geology of the crater. Even so, mission scientists describe the successful touchdown itself, in this terrain, as the hardest part of the job already done.",
    ],
  },
  {
    id: "n3",
    iconKey: "climate",
    category: "Climate",
    accent: "#2E86AB",
    title: "Great Barrier Reef Coral Cover Rises for a Third Year",
    summary:
      "Marine biologists point to cooler summer currents and expanded no-fishing zones as the coral shows its strongest recovery since bleaching events began.",
    date: "2026-07-21",
    source: "EarthLens",
    readTime: "10 min read",
    highlights: [
      "Average hard coral cover across surveyed reef sections has risen for three consecutive years, the longest recovery streak on record.",
      "Cooler-than-average summer sea currents and reduced fishing pressure are cited as the two biggest contributing factors.",
      "Recovery is uneven: northern and central reef sections show strong gains, while some southern sections remain fragile.",
      "Scientists stress that long-term outlook still depends heavily on how quickly global ocean warming trends slow down.",
    ],
    content: [
      "For the third consecutive year, marine surveys of the Great Barrier Reef have recorded a rise in average hard coral cover, marking the longest sustained recovery period since large-scale bleaching events began affecting the reef system. Researchers describe the trend as genuinely encouraging, while cautioning that the reef's longer-term health still depends on global factors well beyond any single region's control.",
      "Coral cover — the proportion of reef surface occupied by living coral rather than bare rock, rubble, or algae — is one of the most widely used indicators of reef health because it reflects both how much coral has died in recent stress events and how much new coral growth has managed to establish itself since. A rising trend over multiple consecutive survey years is considered a much stronger signal than a single good year, which can sometimes be driven by short-term, one-off conditions.",
      "Two factors are being credited most consistently across the surveyed sections: sea surface temperatures during the most recent two summers that came in cooler than the recent decade's average, and an expansion of no-fishing and reduced-extraction zones across parts of the reef system. Cooler water reduces the thermal stress that triggers bleaching, in which corals expel the symbiotic algae that give them both color and much of their energy supply, often leading to death if the stress persists. Reduced fishing pressure, meanwhile, appears to have allowed populations of herbivorous fish to recover, which in turn keeps algae growth in check and gives young coral more open surface to settle on.",
      "The recovery, however, is far from uniform across the reef's roughly 2,300-kilometer length. Survey teams report the strongest gains in the northern and central sections of the reef system, where coral cover in some areas has climbed back close to levels last recorded before the major bleaching events of the previous decade. Southern sections tell a more mixed story: some areas show meaningful recovery, while others remain fragile, still recovering from a combination of past bleaching, crown-of-thorns starfish outbreaks, and occasional storm damage that can undo years of slow coral growth in a matter of days.",
      "Crown-of-thorns starfish, a coral-eating species that can rapidly strip a reef of live coral during population outbreaks, remain one of the most closely watched threats to the recovery trend. Control programs — which involve divers manually removing or injecting starfish in high-density areas — have expanded alongside the no-fishing zones, and researchers credit these combined efforts with limiting the scale of recent outbreaks compared to previous cycles.",
      "Reef scientists are careful to frame the recovery in the context of natural coral growth cycles as well as human intervention. Fast-growing coral species, particularly some branching corals, can rebound relatively quickly — within a handful of years — when conditions allow, which partly explains how coral cover can climb noticeably even after a severe bleaching event. Slower-growing, more structurally complex coral species take much longer to recover and are considered a better long-term indicator of reef resilience, since they provide more stable habitat for the wide range of species that depend on the reef ecosystem.",
      "The recovery has also renewed cautious optimism, though scientists uniformly warn against treating a three-year upward trend as evidence that the reef's underlying vulnerability to climate change has changed. Global average ocean temperatures remain on a long-term warming trajectory, and researchers point out that the same reef system experienced its most severe bleaching events during a stretch of consecutive warm years not long ago. A return to warmer-than-average summer conditions could reverse recent gains relatively quickly, particularly for the younger, still-establishing coral colonies that make up much of the recent growth.",
      "Local management measures are, in this context, best understood as buying time and building resilience rather than solving the underlying problem. Reduced fishing pressure, starfish control, and water-quality improvements from reduced agricultural runoff all help a reef withstand and recover from individual stress events more effectively — but researchers are clear that none of these measures can, on their own, offset a long-term rise in ocean temperatures if global warming trends do not slow.",
      "Tourism operators and coastal communities that depend economically on the reef have welcomed the recovery data, and several dive operators report visibly healthier coral at popular sites compared to surveys conducted during the depth of previous bleaching events. Even so, marine park managers are urging a measured response, noting that public perception of a 'recovered' reef could reduce pressure for continued conservation funding at precisely the moment sustained investment is most likely to matter.",
      "Researchers plan to continue annual surveys, with particular attention to how the reef responds to the next warm-water event, whenever it occurs. In the meantime, the current data is being treated as a genuinely positive, if fragile and geographically uneven, sign — evidence that when local stressors are reduced and ocean conditions cooperate, this reef system retains a meaningful capacity to recover.",
    ],
  },
  {
    id: "n4",
    iconKey: "economy",
    category: "Economy",
    accent: "#B33F3F",
    title: "Central Banks Signal a Coordinated Pause on Rate Hikes",
    summary:
      "Policymakers across three continents hinted at holding rates steady through the autumn as inflation readings cool faster than forecast.",
    date: "2026-07-20",
    source: "MarketNote",
    readTime: "11 min read",
    highlights: [
      "Central banks across three continents signaled they expect to hold interest rates steady through at least the early autumn.",
      "Recent inflation readings have come in below forecasts for three straight reporting periods in several major economies.",
      "Policymakers stressed the pause is conditional and could reverse quickly if inflation data surprises to the upside.",
      "Markets responded with modest gains, though analysts caution against reading the pause as a signal of imminent rate cuts.",
      "Weaker labor market momentum in some regions is being weighed alongside inflation trends in shaping the outlook.",
    ],
    content: [
      "Central banks across three continents have signaled, in closely watched statements over the past week, that they expect to hold benchmark interest rates steady through at least the early autumn, as inflation readings in several major economies have come in below forecasts for three consecutive reporting periods. The coordinated tone, while not a formal joint announcement, was notable enough to move currency and bond markets on the day it emerged.",
      "Policymakers were careful to frame the pause as conditional rather than a declaration that the fight against inflation is over. In each case, officials emphasized that the decision to hold rates steady reflects current data and could reverse quickly if upcoming inflation reports surprise to the upside, or if other economic indicators shift meaningfully. That kind of hedged language is typical of central bank communication, but analysts noted it was delivered with unusual consistency across institutions that don't typically coordinate their public messaging.",
      "The immediate trigger for the shift in tone appears to be a run of inflation data that has undershot expectations. In each of the major economies involved, headline inflation figures for the most recent reporting period came in below what most private-sector economists had forecast, continuing a trend that has now held for three consecutive readings. Core inflation measures, which strip out volatile categories like food and energy prices, have shown a similar, if somewhat more gradual, cooling trend.",
      "Economists point to a combination of factors behind the slowdown: easing supply chain pressures that had driven up the cost of goods in prior years, moderating wage growth in several sectors, and the delayed effect of previous rate hikes finally working their way through the broader economy. Higher borrowing costs take time to filter into consumer and business spending decisions, and some analysts argue the current inflation readings partly reflect rate increases implemented well over a year ago.",
      "Labor market data has also factored into the decision, though in a more mixed way than the inflation figures. Job growth has slowed in several of the economies involved, and in a few cases unemployment has ticked up modestly from recent lows. Central bank officials have generally described this as a 'welcome normalization' after historically tight labor markets, rather than a warning sign — but several officials acknowledged that a sharper deterioration in employment data could shift the policy calculus toward rate cuts faster than currently anticipated.",
      "Financial markets responded to the coordinated signal with modest gains across major equity indices, and government bond yields eased slightly as investors priced in a reduced likelihood of further near-term rate increases. Currency markets showed more varied reactions, with some currencies weakening slightly against others depending on how each region's specific pause was interpreted relative to previously priced-in market expectations.",
      "Analysts covering the announcements were quick to caution against reading the pause as an early signal of imminent rate cuts. A hold, they note, is a meaningfully different policy stance than a cut, and central banks have historically preferred to hold rates at a plateau for an extended period before beginning to lower them, in order to confirm that inflation trends are durable rather than temporary. Several officials explicitly pushed back on market speculation about near-term cuts during follow-up press conferences.",
      "The coordinated-sounding tone across separate institutions has drawn particular attention from market commentators, some of whom see it as evidence that major economies are currently facing a broadly similar set of underlying pressures — cooling but still-present inflation, softening but not collapsing labor markets — even though each central bank operates independently and responds to its own domestic data. Others caution against overreading the similarity, noting that central banks frequently converge on similar language during periods of general economic uncertainty simply because the available tools and data patterns are broadly comparable.",
      "Businesses in interest-rate-sensitive sectors, including housing and construction, generally welcomed the news, citing the value of predictability over the exact rate level itself. Even a pause, rather than an increase, gives companies more confidence in planning financing for longer-term projects, and several industry groups noted that uncertainty about the future rate path had been as disruptive to planning as the higher rates themselves.",
      "Looking ahead, most policymakers have tied any future move — in either direction — explicitly to incoming data rather than a fixed calendar. The next major inflation and employment reports, due over the coming weeks, are now being watched unusually closely by markets as the clearest signal of whether the current pause holds through autumn as currently signaled, or whether a renewed uptick in prices forces a faster return to a more restrictive stance.",
    ],
  },
];

export function formatDate(iso) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}
