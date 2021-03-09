export const state = () => ({
  title: '',
  body: '',
  tags: []
})

export const mutations = {
  addQuestion (state, [text, body, tags]) {
    state.title = text;
    state.body = body;
    state.tags = tags;
  }
}