export interface TopicReply {
    id: number;
    replyText: string;
    topicId: number;
    replyOrder: number;
    createdBy: number;
    createdAt: Date;
    updatedAt: Date;
}