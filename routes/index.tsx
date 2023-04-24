import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh App</title>
      </Head>
      <br/>
      <h1>Welcome to <b>Kasmira</b></h1>
      <div class="subtitle">Fund Your Creative Projects and Ideas with Kasmira</div>

      <div class="instructions">
        <p>Kasmira is a powerful platform designed for creators, artists, and entrepreneurs who are looking for a new way to fund their projects and ideas. With Kasmira, you can easily create a crypto portfolio with your public donation keys, generate QR codes, and start accepting donations from supporters all around the world.</p>
        <details>
          <summary>Read More</summary>
          <p>Whether you're a musician, artist, writer, or anyone with a creative vision, Kasmira makes it easy to share your work and engage with your community. You can sign up for Kasmira and create your own personal page that you can easily embed into your own website or share on social media.</p>
          <p>We also provide a variety of widgets and other tools that make it easy to accept donations and support your projects. With Kasmira, you can focus on your creative work and leave the fundraising to us. So why wait? Sign up for Kasmira today and start turning your creative ideas into reality!</p>
          <div class="text-center">
            <a href="/signup" class="button">Sign Up Now</a>
          </div>
        </details>
      </div>
      <div class="projects-section">
        <h2>Explore Projects and Users on Kasmira</h2>
      </div>
      <br/>
      <br/>
    </>
  );
}
