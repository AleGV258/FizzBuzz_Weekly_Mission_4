// GitHub: @AleGV258

const ExplorerController = require("../../lib/controllers/ExplorerController");

describe("Unit Tests for ExplorerController class", () => {
    test("Create ExplorerController object", () => {
        const explorer = new ExplorerController();
        expect(explorer).toEqual({});
    });

    test("ExplorerController by Mission", () => {
        const explorersByMission = ExplorerController.getExplorersByMission("node");
        expect(explorersByMission).toEqual(
            [{"githubUsername": "ajolonauta1", "mission": "node", "name": "Woopa1", "score": 1, "stacks": ["javascript", "reasonML", "elm"]}, {"githubUsername": "ajolonauta2", "mission": "node", "name": "Woopa2", "score": 2, "stacks": ["javascript", "groovy", "elm"]}, {"githubUsername": "ajolonauta3", "mission": "node", "name": "Woopa3", "score": 3, "stacks": ["elixir", "groovy", "reasonML"]}, {"githubUsername": "ajolonauta4", "mission": "node", "name": "Woopa4", "score": 4, "stacks": ["javascript"]}, {"githubUsername": "ajolonauta5", "mission": "node", "name": "Woopa5", "score": 5, "stacks": ["javascript", "elixir", "elm"]}, {"githubUsername": "ajolonauta11", "mission": "node", "name": "Woopa11", "score": 11, "stacks": ["javascript", "elixir", "groovy", "reasonML", "elm"]}, {"githubUsername": "ajolonauta12", "mission": "node", "name": "Woopa12", "score": 12, "stacks": ["javascript", "elixir", "groovy", "reasonML", "elm"]}, {"githubUsername": "ajolonauta13", "mission": "node", "name": "Woopa13", "score": 13, "stacks": ["javascript", "elixir", "groovy", "reasonML", "elm"]}, {"githubUsername": "ajolonauta14", "mission": "node", "name": "Woopa14", "score": 14, "stacks": ["javascript", "elixir", "groovy", "reasonML", "elm"]}, {"githubUsername": "ajolonauta15", "mission": "node", "name": "Woopa15", "score": 15, "stacks": ["javascript", "elixir", "groovy", "reasonML", "elm"]}]
        );
    });

    test("ExplorerController by Mission Length", () => {
        const explorersByMissionLength = ExplorerController.getExplorersAmonutByMission("node");
        expect(explorersByMissionLength).toBe(10);
    });

    test("ExplorerController by Mission Username", () => {
        const explorersByMissionUsername = ExplorerController.getExplorersUsernamesByMission("node");
        expect(explorersByMissionUsername).toEqual(
            ["ajolonauta1","ajolonauta2","ajolonauta3","ajolonauta4","ajolonauta5","ajolonauta11","ajolonauta12","ajolonauta13","ajolonauta14","ajolonauta15"]
        );
    });

    test("ExplorerController FizzBuzz", () => {
        const number1 = ExplorerController.getExplorersFizzbuzz(1);
        const number3 = ExplorerController.getExplorersFizzbuzz(3);
        const number5 = ExplorerController.getExplorersFizzbuzz(5);
        const number15 = ExplorerController.getExplorersFizzbuzz(15);
        expect(number1).toBe(1);
        expect(number3).toBe("FIZZ");
        expect(number5).toBe("BUZZ");
        expect(number15).toBe("FIZZBUZZ");
    });
});

// npm test test/controllers/ExplorerController.test.js
