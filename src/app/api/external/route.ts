// import { NextResponse } from "next/server";

// // Define the external Api URL
// const External_API_URL = "https://jsonplaceholder.typicode.com/posts"

// export async function GET() {

//     try {
//         const response = await fetch(External_API_URL)
//         if (!response.ok) {
//             return NextResponse.json(

//                 { success: false, message: "Failed fetch the data from the Api" },
//                 { status: response.status }

//             )
//         }
//         const data = await response.json()

//         return NextResponse.json({ success: true, data })


//     } catch (error: any) {

//         return
//         NextResponse.json
//             ({ success: false, message: "something wet wrong", error: error.message })
//     }

// }








import { NextResponse } from "next/server";

const External_API_URL = "https://jsonplaceholder.typicode.com/posts";

export async function GET() {
  try {
    const response = await fetch(External_API_URL);
    if (!response.ok) {
      return NextResponse.json(
        { success: false, message: "Failed to fetch the data from the API" },
        { status: response.status }
      );
    }
    const data = await response.json();

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    return NextResponse.json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
}
