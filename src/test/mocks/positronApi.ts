import * as sinon from 'sinon';

export interface MockPositronApi {
	window: {
		previewUrl: sinon.SinonStub;
	};
	runtime: {
		executeCode: sinon.SinonStub;
	};
}

export function createMockPositronApi(): MockPositronApi {
	return {
		window: {
			previewUrl: sinon.stub().resolves()
		},
		runtime: {
			executeCode: sinon.stub().resolves()
		}
	};
}

export function resetMockPositronApi(mockApi: MockPositronApi): void {
	mockApi.window.previewUrl.reset();
	mockApi.runtime.executeCode.reset();
}
