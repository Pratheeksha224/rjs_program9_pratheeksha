# React Practical - 3

## Title
Build a Student Marks Card using React Props

## Aim

To create reusable React components using **props** and display student details using **Bootstrap Cards**.

## Problem Statement

Create a React component named **StudentCard** that displays student information using Bootstrap Cards.

Each card should display:

- Student Image
- Student Name
- Register Number
- Department
- Marks Scored

Use **props** to pass the student details to the component.

Display **three student cards**.

## Instructions

- Do not modify **index.html**.
- Write your solution only in **index.js**.
- Create a reusable component named **StudentCard**.
- Use **props** to receive the student details.
- Display three Bootstrap cards.
- Use Bootstrap classes to design the cards.

## Expected Output

Display three Bootstrap cards similar to the following.

-----------------------------------
| Student Image                   |
|---------------------------------|
| Name : Arun Kumar               |
| Register No : 23BCA001          |
| Department : BCA                |
| Marks : 485                     |
-----------------------------------

(Repeat for three students)

## Files Provided

```
.
├── index.html
├── index.js
├── package.json
├── images
│   ├── student1.jpg
│   ├── student2.jpg
│   └── student3.jpg
├── tests
│   ├── test.js
│   └── test.sh
└── .github
    └── workflows
        └── autograding.yml
```

## Mark Distribution

| Criteria | Marks |
|----------|------:|
| StudentCard component created | 2 |
| Props used correctly | 2 |
| Bootstrap Card used | 2 |
| Three Student Cards displayed | 2 |
| Student image displayed | 2 |
| **Total** | **10** |

## Submission

1. Complete the program in **index.js**.
2. Commit your changes.
3. Push to GitHub.
4. GitHub Actions will automatically evaluate your assignment.