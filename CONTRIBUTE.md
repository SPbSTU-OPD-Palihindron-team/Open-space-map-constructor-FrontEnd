Commit messages should be like in [AngularJS](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#heading=h.uyo6cb12dt6w)

#### Format of the commit message
```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

Any line of the commit message cannot be longer 100 characters!
This allows the message to be easier to read on github as well as in various git tools.
A commit message consists of a header, a body and a footer, separated by a blank line.

#### Revert
If the commit reverts a previous commit, its header should begin with _revert:_, followed by the
header of the reverted commit. In the body it should say: _This reverts commit <hash>._ , where the
hash is the SHA of the commit being reverted.


#### Message header
The message header is a single line that contains short description of the change containing a
type, an optional scope and a subject.

#### Allowed \<type\>
This describes the kind of change that this commit is providing:
- feat (feature)
- fix (bug fix)
- docs (documentation)
- style (formatting, missing semi colons, ...)
- refactor
- test (when adding missing tests)
- chore (maintain)

#### Allowed \<scope\>
Scope can be anything specifying place of the commit change.
For example $database $backend $location, $browser,
$compile, $rootScope, ngHref, ngClick, ngView, etc...
You can use * if there isn't a more fitting scope.

##### \<subject\> text
This is a very short description of the change.

- use imperative, present tense: “change” not “changed” nor “changes”
- don't capitalize first letter
- no dot (.) at the end

#### Message body
- just as in <subject> use imperative, present tense: “change” not “changed” nor “changes”
- includes motivation for the change and contrasts with previous behavior

Commit message notes:
- [commit message note 1](http://365git.tumblr.com/post/3308646748/writing-git-commit-messages)
- [commit message note 2](http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html)

#### Message footer
Breaking changes

All breaking changes have to be mentioned as a breaking change block in the footer, which should
start with the word BREAKING CHANGE: with a space or two newlines.
The rest of the commit message is then the description of the change, justification and migration notes.
BREAKING CHANGE: isolate scope bindings definition has changed and
the inject option for the directive controller injection was removed.

To migrate the code follow the example below:

Before:
```
scope: {
myAttr: 'attribute',
myBind: 'bind',
myExpression: 'expression',
myEval: 'evaluate',
myAccessor: 'accessor'
}
```
After:
```
scope: {
myAttr: '@',
myBind: '@',
myExpression: '&',
// myEval - usually not useful, but in cases where the expression is assignable, you can use '='
myAccessor: '=' // in directive's template change myAccessor() to myAccessor
}
The removed `inject` wasn't generaly useful for directives so there should be no code using it.
Referencing issues
Closed bugs should be listed on a separate line in the footer prefixed with "Closes" keyword like
this:
Closes #234
or in case of multiple issues:
Closes #123, #245, #992
```

### Examples

```
feat($browser): onUrlChange event (popstate/hashchange/polling)

Added new event to $browser:
- forward popstate event if available
- forward hashchange event if popstate not available
- do polling when neither popstate nor hashchange available

Breaks $browser.onHashChange, which was removed (use onUrlChange instead)
```

```
fix($compile): couple of unit tests for IE9

Older IEs serialize html uppercased, but IE9 does not...
Would be better to expect case insensitive, unfortunately jasmine does
not allow to user regexps for throw expectations.

Closes #392
Breaks foo.bar api, foo.baz should be used instead
```

```
feat(directive): ng:disabled, ng:checked, ng:multiple, ng:readonly, ng:selected

New directives for proper binding these attributes in older browsers (IE).
Added coresponding description, live examples and e2e tests.

Closes #351
```

```
style($location): add couple of missing semi colons
```

```
docs(guide): updated fixed docs from Google Docs

Couple of typos fixed:
- indentation
- batchLogbatchLog -> batchLog
- start periodic checking
- missing brace
```

```
feat($compile): simplify isolate scope bindings

Changed the isolate scope binding options to:
- @attr - attribute binding (including interpolation)
- =model - by-directional model binding
- &expr - expression execution binding
This change simplifies the terminology as well as
number of choices available to the developer. It
also supports local name aliasing from the parent.

BREAKING CHANGE: isolate scope bindings definition has changed and
the inject option for the directive controller injection was removed.
To migrate the code follow the example below:
Before:
scope: {
myAttr: 'attribute',
myBind: 'bind',
myExpression: 'expression',
myEval: 'evaluate',
myAccessor: 'accessor'
}
After:
scope: {
myAttr: '@',
myBind: '@',
myExpression: '&',
// myEval - usually not useful, but in cases where the expression is
assignable, you can use '='
myAccessor: '=' // in directive's template change myAccessor() to myAccessor
}
The removed `inject` wasn't generaly useful for directives so there should be no
code using it.
```

### Branch names.

#### Branch name tags:
1. for Issue realize: Issue_\<number\>_\<addiction issue name\>
2. For testing samples: Test_\<test name\>
3. For code examples: Example_\<example description name\>

#### Example:
```
Issue_123_Implement_class_Programmer
```

### Merge request naming:
When create merge request can be created?
- Merge request can be created immediately after first work init issue commit.
If it is issue number should be written in commit message.
- При завершении работы, когда получается «рабочий прототип» результата. Тогда
необходимо предоставить ваш код на обзор кода(code review) ответственным за проект
(maintainer)

#### Merge request formatting:
```
<Title>:
<Body>:
- <What was released>
- <Solving info>
- <Solved issues list>
```

_Meanings:_

**\<Title\>** - title should say a short idea of work.
If merge request created after first commit for mark meaning that work in progress,
you should print in title «Draft:».


**\<Body\>** - should contain information about realized features.
If it is necessary implementation methods should be written here.

**Body structure:**

- **\<What was released\>** - first article should contain short information about implemented features.
If you are close only issue task you can skip this part.

- **\<Solving info\>** - second article should contain implementation methods if it wasn't set in issue.
Especially you have to write all "slippery" implementation moments if you forced to use them.


- **\<Solved issues list\>** - line with list enumeration of issue which one will be closed by this pull request.
It looks like: «Closes: #<issue number>»

### Issue naming:
When issue should be created?
- When the task was fully defined.
- If in the solving some issue you got solve but some feature for finish current issue too big.
This feature can be moved to another issue (it should be marked in push request and in close issue).
- Bug issue. If you found bug you should mark it in issue with detailed bug description.

#### Issue body formatting:
```
<Title>

issue:
<Body>:
- <What should be released>
- <Solving info>
```

_Meanings:_

You should mark an issue with label:

- "enhancement" - if you create feature task issue.
- "bug" - if you create bugfix work issue.
- any another available labels ...

**\<Title\>** - title should say a short idea of issue task.

**\<Body\>** - should contain information about features which should be realized.
If it should contain special implementation methods, they should be written here.

Body should have this structure:
- \<What should be released\> - detailed task description.
If you use any pictures to describe the problem or task it should be attached there
- (if this information is in repo docks, you can past link to this doc).
- \<Solving info\> - if you want to get concrete realize method,
you should describe it there with link to feature if it is.
