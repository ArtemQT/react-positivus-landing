import styles from './TestimonialCard.module.scss'

export default function TestimonialCard({ author, post, testimonial }) {
	return (
		<figure className={styles.card}>
			<blockquote className={styles.cardQuote}>
				{testimonial}
			</blockquote>
			<figcaption className={styles.cardCaption}>
				<cite className={styles.cardAuthor}>{author}</cite>
				<p className={styles.cardAuthorPost}>{post}</p>
			</figcaption>
		</figure>
	);
}