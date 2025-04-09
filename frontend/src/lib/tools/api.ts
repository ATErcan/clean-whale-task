import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

import axiosInstance from "./axios";
import { ISignUpRequest } from "../types/requests/user.type";
import { ILoginResponse } from "../types/responses/user.type";

/**
 * Sends a POST request to a given URL using axios and handles errors.
 *
 * @template T
 * @param {string} url - The API endpoint to post data to.
 * @param {Record<string, any>} options - The data to be sent in the POST request.
 * @param {AxiosRequestConfig<any>} [config] - The axios request config to be sent in the POST request.
 * @returns {Promise<T>} - The response data.
 * @throws Will throw an error if the request fails.
 */
export const postData = async <T>(
  url: string,
  options: Record<string, any>,
  config?: AxiosRequestConfig
): Promise<T> => {
  try {
    const response: AxiosResponse<T> = await axiosInstance.post(
      url,
      options,
      config
    );
    return response.data;
  } catch (error) {
    console.error("Error posting data:", error);
    if (axios.isAxiosError(error)) {
      throw error.response?.data.error;
    } else {
      throw new Error("Unknown error while request");
    }
  }
};

/**
 * Registers a new user using the provided information.
 *
 * @param {ISignUpRequest} user - The user's registration information.
 * @returns {Promise<ILoginResponse>} - The response after registration.
 */
export const signUp = async (
  user: ISignUpRequest,
): Promise<ILoginResponse> => {
  return postData<ILoginResponse>('/auth/signup', {
    ...user,
  });
};