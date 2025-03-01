import { Satisfies } from 'common';

describe(`Satisfies`, () => {
  it(`works`, () => {
    type Move = [number, number];
    type BotActions = Satisfies<
      {
        BEGIN: { input?: void; output: Move };
        START: { input: number; output: string };
        TURN: { input: Move; output: Move };
      },
      Record<string, { input?: unknown; output: unknown }>
    >;
    type BotActionType = keyof BotActions;
    type BotAction = {
      [ActionType in BotActionType]: BotActions[ActionType]['input'] extends void
        ? { type: ActionType }
        : { type: ActionType; input: BotActions[ActionType]['input'] };
    }[BotActionType];

    const emit = (action: BotAction) => action;
    emit({ type: 'BEGIN' });
    // @ts-expect-error Property 'input' is missing in type '{ type: "START"; }' but required in type '{ type: "START"; input: number; }'
    emit({ type: 'START' });
  });
});
