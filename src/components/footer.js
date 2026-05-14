export default function Footer() {
  const MenuGroup = (item) => {
    return item.map((menu) => {
      return <div>{menu}</div>;
    });
  };
  const menus = [
    { home: ["about", "coinbase", "donait"] },
    { features: ["features", "pricing", "support", "resources"] },
    { Resources: ["logos", "Connect", "resources"] },
    { blog: ["about on", "artifacts", "Connect"] },
  ];
  function FooterMenu() {
    return (
      <div className="grid grid-cols-5 p-3 capitalize">
        {menus.map((menu, index) => {
          return (
            <div key={index}>
              {Object.entries(menu).map(([key, items]) => (
                <div key={key}>
                  <h3 className="font-bold">{key}</h3>

                  {items.map((item, i) => (
                    <div key={i}>{item}</div>
                  ))}
                </div>
              ))}
            </div>
          );
        })}
        <div>
          <h3>Social</h3>
          <div className="flex justify-space-between">
            <span>Facebook</span>
            <span>Youtube</span>
            <span>Twitter</span>
            <span>Instagram</span>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      <FooterMenu />
    </div>
  );
}
