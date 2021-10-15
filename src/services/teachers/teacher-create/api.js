import {requests} from "../../../utils/axios";
import { url } from "../index";

export const createTeacherAPI = (values) => requests.post(`${url}`, values)
