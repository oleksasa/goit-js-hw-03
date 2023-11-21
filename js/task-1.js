function slugify(title) {
  const titleLowerCase = title.toLowerCase().split(' ');
  const slug = titleLowerCase.join('-');
  return slug;
}
