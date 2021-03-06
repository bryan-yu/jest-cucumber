export type StepFromStepDefinitions = {
    stepMatcher: string | RegExp;
    stepFunction(stepArguments?: any): void | PromiseLike<any>;
};

export type ScenarioFromStepDefinitions = {
    title: string;
    steps: StepFromStepDefinitions[];
};

export type FeatureFromStepDefinitions = {
    title: string;
    scenarios: ScenarioFromStepDefinitions[];
};

export type ParsedStep = {
    keyword: string;
    stepText: string;
    stepArgument: string | {};
};

export type ParsedScenario = {
    title: string;
    steps: ParsedStep[];
    tags: string[];
};

export type ParsedScenarioOutline = {
    title: string;
    tags: string[];
    scenarios: ParsedScenario[];
    steps: ParsedStep[];
};

export type ParsedFeature = {
    title: string;
    scenarios: ParsedScenario[];
    scenarioOutlines: ParsedScenarioOutline[];
    options: Options;
    tags: string[];
};

export type ScenarioNameTemplateVars = {
    featureTitle: string;
    scenarioTitle: string;
    scenarioTags: string[];
    featureTags: string[];
};

export type Options = {
    tagFilter?: string[];
    errorOnMissingScenariosAndSteps?: boolean;
    scenarioNameTemplate?: (vars: ScenarioNameTemplateVars) => string;
};
