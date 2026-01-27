import styles from "./Testimonials.module.css";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    quote:
      '"This book is a game-changer. I always felt my ideas were overlooked in meetings. After applying the techniques in \'Voice Control,\' I not only command the room but have also received a promotion. It\'s truly transformational."',
    name: "Mark Chen",
    role: "Senior Project Manager",
    image: "/images/testimonial.jpg",
  },
  {
    quote:
      '"This book is a game-changer. I always felt my ideas were overlooked in meetings. After applying the techniques in \'Voice Control,\' I not only command the room but have also received a promotion. It\'s truly transformational."',
    name: "Mark Chen",
    role: "Senior Project Manager",
    image: "/images/testimonial.jpg",
  },
  {
    quote:
      '"This book is a game-changer. I always felt my ideas were overlooked in meetings. After applying the techniques in \'Voice Control,\' I not only command the room but have also received a promotion. It\'s truly transformational."',
    name: "Mark Chen",
    role: "Senior Project Manager",
    image: "/images/testimonial.jpg",
  },
  {
    quote:
      '"This book is a game-changer. I always felt my ideas were overlooked in meetings. After applying the techniques in \'Voice Control,\' I not only command the room but have also received a promotion. It\'s truly transformational."',
    name: "Mark Chen",
    role: "Senior Project Manager",
    image: "/images/testimonial.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {testimonials.map((item, index) => (
          <TestimonialCard
            key={index}
            quote={item.quote}
            name={item.name}
            role={item.role}
            image={item.image}
          />
        ))}
      </div>
    </section>
  );
}
