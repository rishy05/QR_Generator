//Services.js
import Card from "./Card";
function Services() {
  return (
    <div className="container services">
        <h2 className="main-title text-center">PRODUCTS</h2>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-2">
                        <Card title="Bio cup 1" img="bio_cup1.png" text="Morbi eget neque risus. Duis erat quam, porta quis enim id, venenatis blandit nunc. " />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Bio cup 2" img="bio_cup2.png" text="Maecenas dictum efficitur felis non gravida. Vestibulum vitae ante luctus, accumsan mi vitae, pretium metus." />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Bio cup 3" img="bio_cup3.png" text="Phasellus suscipit nibh at nisi finibus vestibulum sit amet vitae massa. Suspendisse non est eget elit pulvinar consectetur nec non sapien." />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Services;