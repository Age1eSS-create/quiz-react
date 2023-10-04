export type answer = {
    id:number;
    text:string
}
export interface QuestType {
    id:number;
    quest: number;
    correct:number;
    answers: Array<answer>;
}

export interface QuestInfoType {
    id: number;
    score:number;
    title:string;
    subtitle:string;
    time:number;
    quests: Array<QuestType>;
}
