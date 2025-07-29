export const questions = [
  {
    id: 1,
    scenario: "During a team meeting, a colleague says to their Asian coworker: 'Your English is so good! Where are you really from?'",
    options: [
      { text: "This is a compliment showing interest in their background", value: "microaggression" },
      { text: "This assumes they're not from here based on appearance", value: "aware" },
      { text: "This is just friendly small talk", value: "microaggression" }
    ],
    feedback: {
      microaggression: "This is a microaggression. It assumes someone isn't 'from here' based on their appearance and treats fluent English as surprising for Asian Americans.",
      aware: "Correct! This type of comment implies that someone doesn't belong or isn't a 'real' American based on their appearance."
    }
  },
  {
    id: 2,
    scenario: "A manager says to their female employee: 'You're so articulate and assertive for a woman!'",
    options: [
      { text: "This is empowering and recognizes her strengths", value: "microaggression" },
      { text: "This reinforces gender stereotypes", value: "aware" },
      { text: "This is a genuine compliment", value: "microaggression" },
      { text: "This helps boost her confidence", value: "microaggression" }
    ],
    feedback: {
      microaggression: "This is a microaggression. It implies that being articulate and assertive is unusual for women, reinforcing harmful stereotypes.",
      aware: "Correct! This comment suggests that leadership qualities are unexpected in women, which perpetuates gender bias."
    }
  },
  {
    id: 3,
    scenario: "A coworker touches their Black colleague's hair without asking and says, 'I've always wanted to know what it feels like!'",
    options: [
      { text: "This shows genuine curiosity and interest", value: "microaggression" },
      { text: "This violates personal boundaries and treats them as exotic", value: "aware" },
      { text: "This is a way to connect and learn", value: "microaggression" }
    ],
    feedback: {
      microaggression: "This is a microaggression. It treats someone as an exotic object and violates personal boundaries without consent.",
      aware: "Correct! This behavior treats someone as a curiosity rather than a person and invades their personal space."
    }
  },
  {
    id: 4,
    scenario: "In a discussion about a technical problem, a colleague says to the only woman in the room: 'Let me explain this in simpler terms so you can understand.'",
    options: [
      { text: "They're being helpful and considerate", value: "microaggression" },
      { text: "This assumes incompetence based on gender", value: "aware" },
      { text: "They're making sure everyone understands", value: "microaggression" },
      { text: "This is good communication practice", value: "microaggression" }
    ],
    feedback: {
      microaggression: "This is a microaggression called 'mansplaining.' It assumes women need simpler explanations, regardless of their expertise.",
      aware: "Correct! This assumes technical incompetence based solely on gender, which is a form of bias."
    }
  },
  {
    id: 5,
    scenario: "A person says to their LGBTQ+ colleague: 'I don't think of you as gay. You're just like normal people to me!'",
    options: [
      { text: "This shows they're accepting and inclusive", value: "microaggression" },
      { text: "This implies being LGBTQ+ is abnormal", value: "aware" },
      { text: "They're trying to make their colleague comfortable", value: "microaggression" }
    ],
    feedback: {
      microaggression: "This is a microaggression. While intended as acceptance, it implies that being LGBTQ+ is not 'normal.'",
      aware: "Correct! This statement, despite good intentions, suggests that LGBTQ+ people are inherently different or abnormal."
    }
  },
  {
    id: 6,
    scenario: "During a job interview, the interviewer asks a woman in her late 20s: 'Do you plan on having children soon? We need someone committed long-term.'",
    options: [
      { text: "This helps plan for team stability", value: "microaggression" },
      { text: "This is discriminatory and likely illegal", value: "aware" },
      { text: "They're being transparent about expectations", value: "microaggression" },
      { text: "This shows they value work-life balance", value: "microaggression" }
    ],
    feedback: {
      microaggression: "This is both a microaggression and potentially illegal discrimination. It assumes women will prioritize family over career.",
      aware: "Correct! This question is discriminatory, often illegal, and reflects bias about women's commitment to work."
    }
  }
];