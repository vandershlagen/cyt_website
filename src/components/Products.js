import Card from "./Card";
function Products() {
  return (
    <div className="container services">
        <h2 className="main-title text-center">OUR PRODUCTS</h2>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-2">
                        <Card title="Chicken Treats" img="card1.png" text="Morbi eget neque risus. Duis erat quam, porta quis enim id, venenatis blandit nunc. " />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Beef Treats" img="card2.png" text="Maecenas dictum efficitur felis non gravida. Vestibulum vitae ante luctus, accumsan mi vitae, pretium metus." />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Services;
