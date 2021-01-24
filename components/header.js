import Link from 'next/link'

const Header = () => (
<header className = "menu">
	<ul>
		<li>
			<Link href="/">
				<a>Home</a>
			</Link>
		</li>
		<li>
			<Link href="/about">
				<a>About Us</a>
			</Link>
		</li>
		<li>
			<Link href="/blog/hello-world">
				<a>Blog Post</a>
			</Link>
		</li>
	</ul>
</header>
)

export default Header
