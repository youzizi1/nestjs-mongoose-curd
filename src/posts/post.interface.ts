import { Document } from 'mongoose';

export interface PostInterface extends Document {
  readonly title: string;
  readonly content: string;
}
