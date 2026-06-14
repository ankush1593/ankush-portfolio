export default function Navbar() {
  return (
    <nav className="flex justify-between p-6 text-white">
      <div>Ankush</div>
      <div className="flex gap-6">
        <a href="/work">Work</a>
        <a href="/writing">Writing</a>
        <a href="/thinking">Thinking</a>
        <a href="/about">About</a>
      </div>
    </nav>
  );
}