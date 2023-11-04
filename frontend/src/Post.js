export default function Post() {
  return (
    <div className="post">
      <div className="postImage">
        <img src="https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      </div>
      <div className="texts">
        <h2>Jakie kosmetyki nad morze zabrać? Moje 5 must-have</h2>
        <p className="postInfo">
          <a className="postAuthor">Emilia Sochiera</a>
          <time>2023-10-06 16:46</time>
        </p>
        <p className="postSummary">
          Planując wakacje nad polskim morzem, istotne jest dbanie o swoje
          piękno i utrzymanie zdrowej kondycji skóry. Jako kobieta, która
          niedawno spędziła wypoczynek w urokliwym miejscu, korzystając z
          komfortowego apartamentu, chciałabym podzielić się moimi
          doświadczeniami i polecić najskuteczniejsze kosmetyki, które warto
          mieć ze sobą na urlop nad brzegiem morza.
        </p>
      </div>
    </div>
  );
}
