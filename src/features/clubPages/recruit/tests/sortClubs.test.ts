import { describe, expect, it } from "vitest";
import { sortClubs } from "../utils/sortClubs"; // 함수가 정의된 파일 경로에 맞게 수정
import { ClubAffiliation, ClubCategory, ClubType } from "@/types/clubType";

describe("sortClubs", () => {
  const clubs: ClubType[] = [
    {
      name: "Club A",
      recruitStartDate: "2024-02-01",
      recruitEndDate: "2024-03-01",
      imageURL: "afsf",
      id: 0,
      category: ClubCategory.RELIGIOUS,
      affiliation: ClubAffiliation.CENTRAL_CLUB,
      description: "",
    },
    {
      name: "Club B",
      recruitStartDate: "2024-02-01",
      recruitEndDate: "2024-03-07",
      imageURL: "afsf",
      id: 1,
      category: ClubCategory.ACADEMIC_CULTURAL,
      affiliation: ClubAffiliation.CENTRAL_CLUB,
      description: "",
    },
    {
      name: "Club C",
      recruitStartDate: "2024-02-01",
      recruitEndDate: "2024-03-08",
      imageURL: "afsf",
      id: 2,
      category: ClubCategory.ACADEMIC_CULTURAL,
      affiliation: ClubAffiliation.CENTRAL_CLUB,
      description: "",
    },
    {
      name: "Club D",
      recruitStartDate: "2024-02-01",
      recruitEndDate: "2024-03-09",
      imageURL: "afsf",
      id: 3,
      category: ClubCategory.RELIGIOUS,
      affiliation: ClubAffiliation.CENTRAL_CLUB,
      description: "",
    },
  ];

  it("should sort clubs by recruitment end date (마감일순)", () => {
    const sortedByEndDate = sortClubs(clubs, "마감일순");

    expect(sortedByEndDate[0].name).toBe("Club A"); // 마감일이 가장 빠른 순
    expect(sortedByEndDate[1].name).toBe("Club B");
    expect(sortedByEndDate[2].name).toBe("Club C");
    expect(sortedByEndDate[3].name).toBe("Club D"); // 마감일이 가장 먼 순
  });

  it("should move clubs with passed end date to the last", () => {
    //const today = new Date().getTime();
    const pastDateClubs = [
      ...clubs,
      {
        name: "Club E",
        recruitStartDate: "2024-01-01",
        recruitEndDate: "2023-12-31", // 이미 지난 마감일
        imageURL: "afsf",
        id: 4,
        category: ClubCategory.SOCIAL,
        affiliation: ClubAffiliation.CENTRAL_CLUB,
        description: "",
      },
    ];

    const sortedPastDate = sortClubs(pastDateClubs, "마감일순");

    expect(sortedPastDate[sortedPastDate.length - 1].name).toBe("Club E"); // 마감일이 지난 경우 맨 뒤로
  });

  it("should return the same array if no sorting condition is provided", () => {
    const unsortedClubs = [...clubs];
    const result = sortClubs(clubs, "");
    expect(result).toEqual(unsortedClubs); // 정렬 기준이 없으면 원본 배열 그대로 반환
  });
});
