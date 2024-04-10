import { UseGetDateToken } from "../../hocks/useGetData";
import { Get_Notifications } from "../type";

export const GetAllNotificationAction = (id) => async (dispatch) => {
  try {
    const res = await UseGetDateToken(`/api/Owner/GetNotifications`, {
      params: {
        UserId: id,
      },
    });
    dispatch({
      type: Get_Notifications,
      data: res,
    });
  } catch (e) {
    dispatch({
      type: Get_Notifications,
      data: e.response,
    });
  }
};
