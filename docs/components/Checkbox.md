Checkbox
========


Props
-----

Prop                  | Type     | Default                   | Required | Description
--------------------- | -------- | ------------------------- | -------- | -----------
className|string|null|No|Adds a class name to the input element.
id|string|null|No|Adds an id to the input element.
value|union(string\|bool)|false|No|The value of the checkbox.
required|bool|false|No|Whether the checkbox is required for form submission.
disabled|bool|false|No|Whether the user is prevented from interacting with the checkbox.
description|node|null|No|A description to display next to the checkbox.
onChange|func|() => null|No|Callback for the onChange event of the input.

A simple checkbox input.

```
<Checkbox value={true} description="Foo" />
```
