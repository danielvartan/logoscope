import * as vscode from 'vscode';
import * as sinon from 'sinon';
import { MockPositronApi, createMockPositronApi, resetMockPositronApi } from '../mocks/positronApi';

export class TestUtils {
	private mockPositronApi: MockPositronApi;
	private stubs: sinon.SinonStub[] = [];

	constructor() {
		this.mockPositronApi = createMockPositronApi();
	}

	setup(): void {
		this.stubs = [];
	}

	teardown(): void {
		this.stubs.forEach(stub => stub.restore());
		this.stubs = [];
		resetMockPositronApi(this.mockPositronApi);
	}

	getMockPositronApi(): MockPositronApi {
		return this.mockPositronApi;
	}

	stubVscodeCommand(_commandId: string): sinon.SinonStub {
		const stub = sinon.stub(vscode.commands, 'executeCommand');
		this.stubs.push(stub);
		return stub;
	}

	stubShowInformationMessage(): sinon.SinonStub {
		const stub = sinon.stub(vscode.window, 'showInformationMessage');
		this.stubs.push(stub);
		return stub;
	}

	stubShowErrorMessage(): sinon.SinonStub {
		const stub = sinon.stub(vscode.window, 'showErrorMessage');
		this.stubs.push(stub);
		return stub;
	}
}