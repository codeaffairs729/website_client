// utils/fetchData.js
export async function fetchHomePageData() {
    const data = await (
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blogs`)
    ).json();
  
    const caseData = await (
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/case-study`)
    ).json();
  
    return { data, caseData };
  }
  