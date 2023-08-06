import { useCallback, useEffect, useState } from 'react'
import styles from '../styles/home.module.css'
import { BasicProgressBar } from '../components/BasicProgressBar'

function throwError() {
  console.log(
    // The function body() is not defined
    document.body()
  )
}

function Home() {
  const [count, setCount] = useState(0)
  const increment = useCallback(() => {
    setCount((v) => v + 1)
  }, [setCount])

  useEffect(() => {
    const r = setInterval(() => {
      increment()
    }, 1000)

    return () => {
      clearInterval(r)
    }
  }, [increment])

  return (
    <main className={styles.main}>
      <h1>Progress bar Demo</h1>
      <p>
        Welcome, if you are here, there is a high chance you got here from a Medium story.
      </p>
      <h2>Basic Progress Bar</h2>
      <BasicProgressBar />
    
    </main>
  )
}

export default Home
