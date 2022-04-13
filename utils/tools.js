function filterData(data, id) {
  if (id === 0) {
    return data
  }
  return data.filter((item) => item.id === id)
}

export { filterData }
