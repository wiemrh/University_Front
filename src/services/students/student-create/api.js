import {requests} from "../../../utils/axios";
import { url } from "../index";

export const createStudentAPI = (values) => requests.post(`${url}`, values)
