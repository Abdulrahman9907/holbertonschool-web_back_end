#!/usr/bin/env python3
"""Module that provides an async generator."""
import asyncio
import random
from typing import Generator


async def async_generator() -> Generator[float, None, None]:
    """Generate 10 random numbers asynchronously.

    Yields:
        Random float between 0 and 10
    """
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
