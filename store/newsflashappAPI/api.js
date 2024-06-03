import axios from "axios"
const newsflashappAPI = axios.create({
  baseURL: "https://newsflashapp-0530--135661.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return newsflashappAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_comment_list(payload) {
  return newsflashappAPI.get(`/api/v1/comment/`)
}
function api_v1_comment_create(payload) {
  return newsflashappAPI.post(`/api/v1/comment/`, payload)
}
function api_v1_comment_retrieve(payload) {
  return newsflashappAPI.get(`/api/v1/comment/${payload.id}/`)
}
function api_v1_comment_update(payload) {
  return newsflashappAPI.put(`/api/v1/comment/${payload.id}/`, payload)
}
function api_v1_comment_partial_update(payload) {
  return newsflashappAPI.patch(`/api/v1/comment/${payload.id}/`, payload)
}
function api_v1_comment_destroy(payload) {
  return newsflashappAPI.delete(`/api/v1/comment/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return newsflashappAPI.post(`/api/v1/login/`, payload)
}
function api_v1_poll_list(payload) {
  return newsflashappAPI.get(`/api/v1/poll/`)
}
function api_v1_poll_create(payload) {
  return newsflashappAPI.post(`/api/v1/poll/`, payload)
}
function api_v1_poll_retrieve(payload) {
  return newsflashappAPI.get(`/api/v1/poll/${payload.id}/`)
}
function api_v1_poll_update(payload) {
  return newsflashappAPI.put(`/api/v1/poll/${payload.id}/`, payload)
}
function api_v1_poll_partial_update(payload) {
  return newsflashappAPI.patch(`/api/v1/poll/${payload.id}/`, payload)
}
function api_v1_poll_destroy(payload) {
  return newsflashappAPI.delete(`/api/v1/poll/${payload.id}/`)
}
function api_v1_polloption_list(payload) {
  return newsflashappAPI.get(`/api/v1/polloption/`)
}
function api_v1_polloption_create(payload) {
  return newsflashappAPI.post(`/api/v1/polloption/`, payload)
}
function api_v1_polloption_retrieve(payload) {
  return newsflashappAPI.get(`/api/v1/polloption/${payload.id}/`)
}
function api_v1_polloption_update(payload) {
  return newsflashappAPI.put(`/api/v1/polloption/${payload.id}/`, payload)
}
function api_v1_polloption_partial_update(payload) {
  return newsflashappAPI.patch(`/api/v1/polloption/${payload.id}/`, payload)
}
function api_v1_polloption_destroy(payload) {
  return newsflashappAPI.delete(`/api/v1/polloption/${payload.id}/`)
}
function api_v1_pollresponse_list(payload) {
  return newsflashappAPI.get(`/api/v1/pollresponse/`)
}
function api_v1_pollresponse_create(payload) {
  return newsflashappAPI.post(`/api/v1/pollresponse/`, payload)
}
function api_v1_pollresponse_retrieve(payload) {
  return newsflashappAPI.get(`/api/v1/pollresponse/${payload.id}/`)
}
function api_v1_pollresponse_update(payload) {
  return newsflashappAPI.put(`/api/v1/pollresponse/${payload.id}/`, payload)
}
function api_v1_pollresponse_partial_update(payload) {
  return newsflashappAPI.patch(`/api/v1/pollresponse/${payload.id}/`, payload)
}
function api_v1_pollresponse_destroy(payload) {
  return newsflashappAPI.delete(`/api/v1/pollresponse/${payload.id}/`)
}
function api_v1_recipe_list(payload) {
  return newsflashappAPI.get(`/api/v1/recipe/`)
}
function api_v1_recipe_create(payload) {
  return newsflashappAPI.post(`/api/v1/recipe/`, payload)
}
function api_v1_recipe_retrieve(payload) {
  return newsflashappAPI.get(`/api/v1/recipe/${payload.id}/`)
}
function api_v1_recipe_update(payload) {
  return newsflashappAPI.put(`/api/v1/recipe/${payload.id}/`, payload)
}
function api_v1_recipe_partial_update(payload) {
  return newsflashappAPI.patch(`/api/v1/recipe/${payload.id}/`, payload)
}
function api_v1_recipe_destroy(payload) {
  return newsflashappAPI.delete(`/api/v1/recipe/${payload.id}/`)
}
function api_v1_signup_create(payload) {
  return newsflashappAPI.post(`/api/v1/signup/`, payload)
}
function api_v1_tag_list(payload) {
  return newsflashappAPI.get(`/api/v1/tag/`)
}
function api_v1_tag_create(payload) {
  return newsflashappAPI.post(`/api/v1/tag/`, payload)
}
function api_v1_tag_retrieve(payload) {
  return newsflashappAPI.get(`/api/v1/tag/${payload.id}/`)
}
function api_v1_tag_update(payload) {
  return newsflashappAPI.put(`/api/v1/tag/${payload.id}/`, payload)
}
function api_v1_tag_partial_update(payload) {
  return newsflashappAPI.patch(`/api/v1/tag/${payload.id}/`, payload)
}
function api_v1_tag_destroy(payload) {
  return newsflashappAPI.delete(`/api/v1/tag/${payload.id}/`)
}
function api_v1_user_list(payload) {
  return newsflashappAPI.get(`/api/v1/user/`)
}
function api_v1_user_create(payload) {
  return newsflashappAPI.post(`/api/v1/user/`, payload)
}
function api_v1_user_retrieve(payload) {
  return newsflashappAPI.get(`/api/v1/user/${payload.id}/`)
}
function api_v1_user_update(payload) {
  return newsflashappAPI.put(`/api/v1/user/${payload.id}/`, payload)
}
function api_v1_user_partial_update(payload) {
  return newsflashappAPI.patch(`/api/v1/user/${payload.id}/`, payload)
}
function api_v1_user_destroy(payload) {
  return newsflashappAPI.delete(`/api/v1/user/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return newsflashappAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return newsflashappAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return newsflashappAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return newsflashappAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return newsflashappAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return newsflashappAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return newsflashappAPI.post(`/rest-auth/registration/resend-email/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return newsflashappAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return newsflashappAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return newsflashappAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return newsflashappAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_comment_list,
  api_v1_comment_create,
  api_v1_comment_retrieve,
  api_v1_comment_update,
  api_v1_comment_partial_update,
  api_v1_comment_destroy,
  api_v1_login_create,
  api_v1_poll_list,
  api_v1_poll_create,
  api_v1_poll_retrieve,
  api_v1_poll_update,
  api_v1_poll_partial_update,
  api_v1_poll_destroy,
  api_v1_polloption_list,
  api_v1_polloption_create,
  api_v1_polloption_retrieve,
  api_v1_polloption_update,
  api_v1_polloption_partial_update,
  api_v1_polloption_destroy,
  api_v1_pollresponse_list,
  api_v1_pollresponse_create,
  api_v1_pollresponse_retrieve,
  api_v1_pollresponse_update,
  api_v1_pollresponse_partial_update,
  api_v1_pollresponse_destroy,
  api_v1_recipe_list,
  api_v1_recipe_create,
  api_v1_recipe_retrieve,
  api_v1_recipe_update,
  api_v1_recipe_partial_update,
  api_v1_recipe_destroy,
  api_v1_signup_create,
  api_v1_tag_list,
  api_v1_tag_create,
  api_v1_tag_retrieve,
  api_v1_tag_update,
  api_v1_tag_partial_update,
  api_v1_tag_destroy,
  api_v1_user_list,
  api_v1_user_create,
  api_v1_user_retrieve,
  api_v1_user_update,
  api_v1_user_partial_update,
  api_v1_user_destroy,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
