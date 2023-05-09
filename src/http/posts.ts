import axios from 'axios';
import { apiClient } from './apiClient';

//임시 Dto
export interface TempPostDto {
  id: number;
  title: string;
  author: string;
  emotion: number;
  created_at: number;
  bookmarksCnt: number;
  commentsCnt: number;
}
