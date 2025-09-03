const my = [
  {
    favorite: [
      "Pepaya",
      "Rambutan",
      "Pisang",
      {
        fruit: {
          is: "Apple",
        },
      },
    ],
  },
];
console.log(my[0].favorite[3].fruit.is);
//"Apple"

const hello = { word: "Hello Word" };
console.log(hello.word);
//"Hello Word"

const obj = {
  str: [
    "test1",
    "test2",
    "test3",
    [
      "test4",
      [
        "test5",
        "test6",

        {
          man: [
            {
              the: {
                name: {
                  of: {
                    us: "Koda",
                  },
                },
              },
            },
          ],
        },
      ],
    ],
  ],
};
console.log(obj.str[3][1][2].man[0].the.name.of.us);
//"Koda"
