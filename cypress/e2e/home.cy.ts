describe("사용자는 이름, 단과대학을 선택하면 테스트를 시작할 수 있다", () => {
    it("이름, 단과대학을 선택하면 테스트를 시작할 수 있다", () => {
        cy.visit("/");

        cy.get("input[placeholder='이름을 입력하세용'").type("TESTNAME");
    });

    it("이름, 단과대학을 선택하지 않으면 테스트를 시작할 수 없다", () => {
        cy.visit("/");

        cy.get("button").contains("테스트 시작하기").click();
        cy.url().should("not.include", "select");
    });
});

describe("사용자는 우측 상단의 메뉴 버튼을 사용해 테스트/통계/만든이들 페이지로 이동 할 수 있다", () => {
    it("사용자는 통계 페이지로 이동할 수 있다", () => {
        cy.visit("/");

        cy.get("#root > div > main > div:first-child > div:first-child").click();
        cy.get("li").contains("통계").click();
        cy.url().should("include", "/analytics");
    });

    it("사용자는 만든이들 페이지로 이동 할 수 있다", () => {
        cy.visit("/");

        cy.get("#root > div > main > div:first-child > div:first-child").click();
        cy.get("li").contains("만든이들").click();
        cy.url().should("include", "/credits");
    });
});
