export enum AppStage {
  INTRO = 'INTRO',
  TIMELINE = 'TIMELINE',

  THE_QUESTION = 'THE_QUESTION',
  SUCCESS = 'SUCCESS'
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: 'star' | 'heart' | 'grad' | 'chat';
}