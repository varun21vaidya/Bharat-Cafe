export class Tag {
  name!: string;
  count!: number;
}

// now we have to create method to return all the tags with its count in Tag[] model formate

// // this data is moved to backend in data.ts

// import { sample_foods } from 'src/data';

// let output = Object.create(null);
// let res: Tag[] = [];
// res.push({ name: 'All', count: sample_foods.length });
// // show all tags
// sample_foods.forEach((food) =>
//   food['tags']?.forEach((tag) => (output[tag] = (output[tag] || 0) + 1))
// );

// // // return Tag object
// Object.keys(output).forEach((tag) => {
//   res.push({ name: tag, count: output[tag] });
// });

// export const taglist = res;
