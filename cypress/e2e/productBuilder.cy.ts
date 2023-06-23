describe("Header", () => {
  //

  beforeEach(() => {
    cy.visit("/");
    cy.intercept("GET", "/api/cars", { fixture: "cars.json" }).as("getCars");
    cy.wait("@getCars").then((res) => {});
  });

  //

  it("should have an heading with the text 'Product Builder'", () => {
    cy.get(".main-header > h1")
      .should("contain.text", "Product Builder")
      .should("be.visible");
  });

  //

  it("should have a button 'Article & Download'", () => {
    cy.get(".main-header > .cd-nugget-info")
      .should("contain.text", "Article & Download")
      .should("have.attr", "href", "https://codyhouse.co/gem/product-builder")
      .should("be.visible");
  });

  //

  it("should have a navigation with first item selected", () => {
    cy.get(".cd-builder-main-nav > ul > li").should("have.length", 4);
    cy.get(".cd-builder-main-nav > ul > :nth-child(1)").should(
      "have.class",
      "active"
    );
  });

  //

  it("should not be able to navigate to other steps if no product is selected", () => {
    cy.get(".cd-builder-main-nav > ul > :nth-child(2) > a").click();
    cy.url().should("not.include", "/colors");
    cy.get(".cd-builder-main-nav > ul > :nth-child(3) > a").click();
    cy.url().should("not.include", "/accessories");
    cy.get(".cd-builder-main-nav > ul > :nth-child(4) > a").click();
    cy.url().should("not.include", "/summary");
  });

  //

  it("should be able to navigate to other steps if a product is selected", () => {
    cy.get(".models-list > li:nth-child(1)").click();
    cy.get(".cd-builder-main-nav > ul > :nth-child(2) > a").click();
    cy.url().should("include", "/colors");
    cy.get(".cd-builder-main-nav > ul > :nth-child(3) > a").click();
    cy.url().should("include", "/accessories");
    cy.get(".cd-builder-main-nav > ul > :nth-child(4) > a").click();
    cy.url().should("include", "/summary");
    cy.get(".cd-builder-main-nav > ul > :nth-child(1) > a").click();
    cy.url().should("include", "/");
  });

  //

  it("on mobile navigation should not be visible", () => {
    cy.viewport("iphone-6");
    cy.get(".main-header").should("not.be.visible");
  });

  //

  it("on mobile navigation should render a 'Select Model' heading", () => {
    cy.viewport("iphone-6");
    cy.get(".cd-step-content > header > h1")
      .should("contain.text", "Select Model")
      .should("be.visible");
  });

  //

  it("on mobile should render a the Step # out of 4", () => {
    cy.viewport("iphone-6");
    cy.get(".steps-indicator")
      .should("have.text", "Step 1 of 4")
      .should("be.visible");
  });
});

describe("Footer", () => {
  //

  beforeEach(() => {
    cy.visit("/");
    cy.intercept("GET", "/api/cars", { fixture: "cars.json" }).as("getCars");
    cy.wait("@getCars").then((res) => {});
  });

  //

  it("product image should not be visible if no product is selected", () => {
    cy.get(".selected-product > img").should("not.be.visible");
  });

  //

  it("product image should be visible if a product is selected", () => {
    cy.get(".models-list > li:nth-child(1)").click();
    cy.get(".selected-product > img").should("be.visible");
  });

  //

  it("product price should be 0 if no product is selected", () => {
    cy.get(".total > b").should("have.text", "0");
  });

  //

  it("product price should match selected product price", () => {
    cy.fixture("cars.json").then((cars) => {
      cars.forEach((car: Car, index: number) => {
        cy.get(`.models-list > li:nth-child(${index + 1})`).click();
        cy.get(".total > b").should("have.text", car.price);
      });
    });
  });

  //

  it("navigation should be disabled if no product is selected", () => {
    cy.get(".next > ul > li:nth-child(1) > a").should("have.attr", "href", "#");
  });

  //

  it("should be able to navigate through steps if a product is selected", () => {
    cy.get(`.models-list > li:nth-child(1)`).click();

    cy.get(".next > ul > li:nth-child(1) > a").should(
      "not.have.attr",
      "href",
      "#"
    );
    cy.get(".next > ul > li:nth-child(1)").click();
    cy.url().should("include", "/colors");

    cy.get(".next > ul > li:nth-child(2) > a").should(
      "not.have.attr",
      "href",
      "#"
    );
    cy.get(".next > ul > li:nth-child(2)").click();
    cy.url().should("include", "/accessories");

    cy.get(".next > ul > li:nth-child(3) > a").should(
      "not.have.attr",
      "href",
      "#"
    );
    cy.get(".next > ul > li:nth-child(3)").click();
    cy.url().should("include", "/summary");

    cy.get(".prev > ul > li:nth-child(4) > a").should(
      "not.have.attr",
      "href",
      "#"
    );
    cy.get(".prev > ul > li:nth-child(4)").click();
    cy.url().should("include", "/accessories");

    cy.get(".prev > ul > li:nth-child(3) > a").should(
      "not.have.attr",
      "href",
      "#"
    );
    cy.get(".prev > ul > li:nth-child(3)").click();
    cy.url().should("include", "/colors");

    cy.get(".prev > ul > li:nth-child(2) > a").should(
      "not.have.attr",
      "href",
      "#"
    );
    cy.get(".prev > ul > li:nth-child(2)").click();
    cy.url().should("include", "/");
  });

  //

  it("on mobile footer should be hidden if no product is selected", () => {
    cy.viewport("iphone-6");
    cy.get(".selected-product > img").should("not.be.visible");
    cy.get(".total > b").should("not.be.visible");
  });

  //

  it("on mobile footer should be visible if a product is selected", () => {
    cy.viewport("iphone-6");
    cy.get("footer").should("not.be.visible");
    cy.get(".models-list > li:nth-child(1)").click();
    cy.get("footer").should("be.visible");
  });

  //

  it("on mobile image and total price should be hidden", () => {
    cy.viewport("iphone-6");
    cy.get(".models-list > li:nth-child(1)").click();
    cy.get(".selected-product > img").should("not.be.visible");
    cy.get(".total > b").should("not.be.visible");
  });
});

describe("Step 1 - Models", () => {
  //

  beforeEach(() => {
    cy.visit("/");
    cy.intercept("GET", "/api/cars", { fixture: "cars.json" }).as("getCars");
    cy.wait("@getCars").then((res) => {});
  });

  //

  it("should render all products correctly", () => {
    cy.fixture("cars.json").then((cars) => {
      cars.forEach((car: Car, index: number) => {
        cy.get(`.models-list > li:nth-child(${index + 1}) > .name`)
          .should("contain.text", car.model)
          .should("contain.text", car.manufacturer);

        cy.get(`.models-list > li:nth-child(${index + 1}) > img`).should(
          "be.visible"
        );

        cy.get(`.models-list > li:nth-child(${index + 1}) > .price`).should(
          "contain.text",
          car.price.toLocaleString("it")
        );
      });
    });
  });

  //

  it("should be able to select/deselect/switch products on click", () => {
    cy.get(".models-list > li").each((productCard) => {
      const pc = cy.wrap(productCard);
      pc.should("be.visible");
      pc.should("not.have.class", "selected");
      pc.click();
      pc.should("have.class", "selected");
      pc.click();
      pc.should("not.have.class", "selected");
    });

    cy.get(".models-list > li:nth-child(1)").should(
      "not.have.class",
      "selected"
    );
    cy.get(".models-list > li:nth-child(2)").should(
      "not.have.class",
      "selected"
    );

    cy.get(".models-list > li:nth-child(1)").click();

    cy.get(".models-list > li:nth-child(1)").should("have.class", "selected");
    cy.get(".models-list > li:nth-child(2)").should(
      "not.have.class",
      "selected"
    );

    cy.get(".models-list > li:nth-child(2)").click();

    cy.get(".models-list > li:nth-child(1)").should(
      "not.have.class",
      "selected"
    );
    cy.get(".models-list > li:nth-child(2)").should("have.class", "selected");

    cy.get(".models-list > li:nth-child(2)").click();

    cy.get(".models-list > li:nth-child(1)").should(
      "not.have.class",
      "selected"
    );
    cy.get(".models-list > li:nth-child(2)").should(
      "not.have.class",
      "selected"
    );
  });
});

describe("Step 2 - Colors", () => {
  //

  beforeEach(() => {
    cy.visit("/");
    cy.intercept("GET", "/api/cars", { fixture: "cars.json" }).as("getCars");
    cy.wait("@getCars").then((res) => {});
    cy.get(".models-list > li:nth-child(1)").click();
    cy.get(".cd-builder-main-nav > ul > :nth-child(2) > a").click();
    cy.url().should("include", "/colors");
  });

  //

  it("should render a product preview", () => {
    cy.get(".product-preview").should(
      "have.attr",
      "src",
      "/assets/images/product01_col01.jpg"
    );
  });

  //

  it("should be able to switch color", () => {
    cy.get(".cd-product-customizer > li").each((color) => {
      const cl = cy.wrap(color);
      cl.should("be.visible");
    });

    cy.get(".cd-product-customizer > li").each((color, index) => {
      const cl = cy.wrap(color);
      cl.click();
      cl.should("have.class", "selected");
      cy.get(".product-preview").should(
        "have.attr",
        "src",
        `/assets/images/product01_col0${index + 1}.jpg`
      );
    });
  });

  //

  it("if color changes price should be updated accordingly", () => {
    cy.fixture("cars.json").then((cars) => {
      const totPrice = cars[0].price;
      cy.fixture("colors.json").then((colors: Color[]) => {
        colors.forEach((color: Color, index: number) => {
          cy.get(`.cd-product-customizer > li:nth-child(${index + 1})`).click();
          cy.get(".total > b").should("have.text", totPrice + color.price);
        });
      });
    });
  });
});

describe("Step 3 - Accessories", () => {
  //

  beforeEach(() => {
    cy.visit("/");
    cy.intercept("GET", "/api/cars", { fixture: "cars.json" }).as("getCars");
    cy.wait("@getCars").then((res) => {});
    cy.get(".models-list > li:nth-child(1)").click();
    cy.get(".cd-builder-main-nav > ul > :nth-child(3) > a").click();
    cy.url().should("include", "/accessories");
  });

  //

  it("should render a list of accessories", () => {
    cy.get(".accessories-list").should("be.visible");
  });

  //

  it("list of accessories should match selected product ones", () => {
    cy.fixture("cars.json").then((cars) => {
      cars[0].accessories.forEach((accessory: Accessory, index: number) => {
        cy.get(`.accessories-list > li:nth-child(${index + 1}) > p`).should(
          "contain.text",
          accessory.name
        );
        cy.get(
          `.accessories-list > li:nth-child(${index + 1}) > .price`
        ).should("contain.text", accessory.price.toLocaleString("it"));
      });
    });
  });

  //

  it("should be able to select/deselect accessories", () => {
    cy.get(".accessories-list > li").each((accessory) => {
      const ac = cy.wrap(accessory);
      ac.should("be.visible");
      ac.should("not.have.class", "selected");
      ac.click();
      ac.should("have.class", "selected");
      ac.click();
      ac.should("not.have.class", "selected");
    });
  });

  //

  it("if accessories are selected price should update accordingly", () => {
    cy.fixture("cars.json").then((cars) => {
      const carPrice = cars[0].price;
      let totPrice = carPrice;
      cy.fixture("cars.json").then((cars: Car[]) => {
        cars[0].accessories?.forEach((accessory: Accessory, index: number) => {
          cy.get(`.accessories-list > li:nth-child(${index + 1})`).click();
          cy.get(`.accessories-list > li:nth-child(${index + 1})`).then(
            (item) => {
              if (item.hasClass("selected")) {
                totPrice += accessory.price;
                cy.get(`.total > b`).should("have.text", totPrice);
              }
            }
          );
        });
      });
    });
  });
});

describe("Step 4 - Summary", () => {
  //

  beforeEach(() => {
    cy.visit("/");
    cy.intercept("GET", "/api/cars", { fixture: "cars.json" }).as("getCars");
    cy.wait("@getCars").then((res) => {});
    cy.get(".models-list > li:nth-child(2)").click();
    // navigate to colors step
    cy.get(".cd-builder-main-nav > ul > :nth-child(2) > a").click();
    cy.url().should("include", "/colors");
    // select second color
    cy.get(`.cd-product-customizer > li:nth-child(2)`).click();
    // navigate to accessories step
    cy.get(".cd-builder-main-nav > ul > :nth-child(3) > a").click();
    cy.url().should("include", "/accessories");
    // select second and third accessories
    cy.get(`.accessories-list > li:nth-child(2)`).click();
    cy.get(`.accessories-list > li:nth-child(3)`).click();
    // navigate to summary step
    cy.get(".cd-builder-main-nav > ul > :nth-child(4) > a").click();
    cy.url().should("include", "/summary");
  });

  //

  it("should have a headings: Model, Color and Accessories", () => {
    cy.get(":nth-child(1) > h2").should("have.text", "Model");
    cy.get('[data-summary="colors"] > h2').should("have.text", "Color");
    cy.get('[data-summary="accessories"] > h2').should(
      "have.text",
      "Accessories"
    );
  });

  //

  it("should render all information about the selected product, color and accessories", () => {
    cy.fixture("summary.json").then((summary) => {
      cy.get(".product-preview").should(
        "have.attr",
        "src",
        summary.color?.image
      );
      cy.get("h3")
        .should("contain.text", summary.manufacturer)
        .should("contain.text", summary.model);
      cy.get(".summary-list > :nth-child(1) > p").should(
        "contain.text",
        summary.description
      );
      cy.get(".color-label")
        .should("contain.text", summary.color.name)
        .should("contain.text", summary.color.price.toLocaleString("it"));
      cy.get(".summary-accessories > li:nth-child(1) > p").should(
        "contain.text",
        summary.accessories[0].name
      );
      cy.get(".summary-accessories > li:nth-child(2) > p").should(
        "contain.text",
        summary.accessories[1].name
      );
    });
  });
});
