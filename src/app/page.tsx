import FeaturedCollection from '@/components/FeaturedCollection';

export default function Home() {
  // eslint-disable-next-line react/no-unescaped-entities
  return (
    <div className="h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 bg-[#f8fdff] scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-grey-400 ">
      {/* WrittenSnippetcomponent: create Bustle-like layout div, with 3 childs, in flex wrap when sm: (>small screen), in column when less */}
      <section className="snap-start" id="hero">
        <FeaturedCollection />
      </section>
      {/* add shop snippet component, 3 piece portraits when md: */}
      add shop component
    </div>
  );
}
