import Link from 'next/link'

function Index({ stars, thejson }) {
  return (
    <>
      <title>Sample NextJS Data Fetch</title>
      <div className="body" >
        <p>Next.js has {stars} ⭐️</p>
        <Link href="/preact-stars">
          <a>How about preact?</a>
        </Link>
        {
          thejson.completed ? <p>{thejson.title}</p> : <p>JSON Place holder task not completed.</p>
        }
      </div>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const json = await res.json()

  const jsonres = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const thejson = await jsonres.json()

  return {
    props: {
      stars: json.stargazers_count,
      thejson: thejson

    },
  }
}

export default Index
