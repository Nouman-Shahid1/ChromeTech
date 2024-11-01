
import Head from "next/head";

const About = () => {
  return (
    <div>
      <Head>
        <title>About Us</title>
        <meta
          name="description"
          content="Learn more about our company and team."
        />
      </Head>

      <main>
        <h1>About Us</h1>
        <p>
          Welcome to [Your Company Name]! We are dedicated to providing
          excellent services and solutions that meet the unique needs of our
          clients. With a passion for innovation and a commitment to quality, we
          strive to deliver impactful results in every project we undertake.
        </p>

        <section>
          <h2>Our Team</h2>
          <p>
            Our team is made up of experts in their fields, all driven by a
            shared vision of creating value and delivering excellence. Together,
            we bring diverse perspectives and skills to tackle challenges and
            deliver solutions tailored to your success.
          </p>
        </section>

        <section>
          <h2>Our Mission</h2>
          <p>
            To empower businesses with innovative technology and dedicated
            support, helping them grow and succeed in a constantly evolving
            digital landscape.
          </p>
        </section>
      </main>
    </div>
  );
};

export default About;
