import * as assert from 'assert';
import * as vscode from 'vscode';
import * as sinon from 'sinon';
import { TestUtils } from '../helpers/testUtils';

suite('Extension Test Suite', () => {
	let testUtils: TestUtils;

	suiteSetup(async () => {
		// Activate extension before running tests
		const ext = vscode.extensions.getExtension('your-publisher-name.positron-extension-template');
		if (ext && !ext.isActive) {
			await ext.activate();
		}
	});

	setup(() => {
		testUtils = new TestUtils();
		testUtils.setup();
	});

	teardown(() => {
		testUtils.teardown();
	});

	test('Extension should be present', () => {
		assert.ok(vscode.extensions.getExtension('your-publisher-name.positron-extension-template'));
	});

	test('Should register positronExtension.demo command', async () => {
		const commands = await vscode.commands.getCommands(true);
		assert.ok(commands.includes('positronExtension.demo'), 'Command positronExtension.demo should be registered');
	});

	test('Demo command should show information message', async () => {
		const showInfoStub = testUtils.stubShowInformationMessage();
		showInfoStub.resolves();

		await vscode.commands.executeCommand('positronExtension.demo');

		assert.ok(showInfoStub.calledOnce);
		assert.ok(showInfoStub.calledWith(sinon.match.string));
	});
});
