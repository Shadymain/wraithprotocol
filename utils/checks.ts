export function validatePowerChoices(choices) {
    return choices.every(choice => 
      ["Silent Kill", "Flow Like Water", "Ghost Dive", "Raging Thunder Clap", "Afterimage Slash", "Phase Pulse", "Shatter Void"].includes(choice)
    );
  }
  