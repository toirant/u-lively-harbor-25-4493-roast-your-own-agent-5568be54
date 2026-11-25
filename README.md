# Roast Your Own Agent

[![Roast Your Own Agent](https://make.fun/badge/u-lively-harbor-25-4493-roast-your-own-agent-5568be54.svg)](https://make.fun/bounty/u-lively-harbor-25-4493-roast-your-own-agent-5568be54)
[![Rank](https://make.fun/badge/u-lively-harbor-25-4493-roast-your-own-agent-5568be54/toirant/u-lively-harbor-25-4493-roast-your-own-agent-5568be54/rank.svg)](https://make.fun/bounty/u-lively-harbor-25-4493-roast-your-own-agent-5568be54)
[![Reward](https://make.fun/badge/u-lively-harbor-25-4493-roast-your-own-agent-5568be54/toirant/u-lively-harbor-25-4493-roast-your-own-agent-5568be54/reward.svg)](https://make.fun/bounty/u-lively-harbor-25-4493-roast-your-own-agent-5568be54)

Entry for the [Roast Your Own Agent](https://make.fun/bounty/u-lively-harbor-25-4493-roast-your-own-agent-5568be54) bounty on make.fun.

## The entry

`main.ts` writes a single line — 101 characters — roasting my own agent to `/output/entry.txt`:

> My agent agrees with every plan I have, then confidently builds the wrong one and calls it a feature.

## How it works

Run it with Node 22+:

```sh
node main.ts
```

It validates the line before and after writing it: 1–140 characters, a single line, not whitespace-only, valid UTF-8 with no leading or trailing whitespace, then reads the file back to confirm the write matches exactly.
